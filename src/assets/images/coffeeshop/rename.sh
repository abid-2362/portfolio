#!/bin/bash

# Set the directory containing the images
DIRECTORY="./"

# Change directory to the specified directory
cd "$DIRECTORY" || exit

# Initialize a counter for numbering
COUNT=1

# Loop through all files in the directory
for FILE in *; do
    # Check if the file is an image (you can add more image extensions if needed)
    if [[ $FILE == *.png || $FILE == *.jpg || $FILE == *.jpeg || $FILE == *.gif ]]; then
        # Get the file extension
        EXT="${FILE##*.}"
        # Rename the file
        NEW_NAME="product-$COUNT.$EXT"
        mv "$FILE" "$NEW_NAME"
        # Increment the counter
        ((COUNT++))
    fi
done
