#Load packages --------------------------
library(devtools)
library(naniar)



# Function to bind CSVs --------------------------
bind_csvs_from_folder <- function(folder_path) {
  # Check if the folder exists
  if (!dir.exists(folder_path)) {
    stop("The specified folder does not exist")
  }
  
  # List all CSV files in the folder
  csv_files <- list.files(path = folder_path, pattern = "\\.csv$", full.names = TRUE)
  
  # Check if any CSV files were found
  if (length(csv_files) == 0) {
    stop("No CSV files found in the specified folder")
  }
  
  # Create an empty list to store dataframes
  df_list <- list()
  
  # Read each CSV and store in the list
  for (file in csv_files) {
    tryCatch({
      df <- read.csv(file, stringsAsFactors = FALSE)
      df_list[[basename(file)]] <- df
      message(paste("Successfully read:", basename(file)))
    }, error = function(e) {
      warning(paste("Failed to read file:", basename(file), "- Error:", e$message))
    })
  }
  
  # Check if any files were successfully read
  if (length(df_list) == 0) {
    stop("Failed to read any CSV files")
  }
  
  # Get all unique column names across all dataframes
  all_cols <- unique(unlist(lapply(df_list, colnames)))
  
  # Function to add missing columns and reorder
  standardize_columns <- function(df, all_columns) {
    missing_cols <- setdiff(all_columns, colnames(df))
    
    # Add missing columns with NA values
    for (col in missing_cols) {
      df[[col]] <- NA
    }
    
    # Return dataframe with columns in the same order
    return(df[, all_cols])
  }
  
  # Standardize all dataframes
  standardized_dfs <- lapply(df_list, standardize_columns, all_columns = all_cols)
  
  # Combine all dataframes
  combined_df <- do.call(rbind, standardized_dfs)
  
  # Add a column indicating source file if needed
  combined_df$source_file <- rep(names(standardized_dfs), sapply(standardized_dfs, nrow))
  
  return(combined_df)
}


# Load data: loading in data from folder ------------------------------
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
mydata <- bind_csvs_from_folder("../data/")

# Select data: this allows for the long data to be concised to relevant columns --------------------------------
mydata <- subset(mydata, phase != "Practice" & trial_type == "Summary Trial", select = c("participant_id", "condition","phase","trialnum", "blocknum", "dot_difference","rt","response", "target_left","correct", "confidence"))


write.csv(mydata, "clean-data.csv", row.names = F, na = "")

