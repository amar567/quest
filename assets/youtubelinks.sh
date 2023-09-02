#!/bin/bash

# Set the cutoff date in Unix timestamp format
CUTOFF_DATE=$(date -d "2023-05-01" +%s)

# Retrieve the channel's previous live streams using youtube-dl
youtube-dl -j --flat-playlist "https://www.youtube.com/@QIQT/streams" | while read -r line; do
  # Extract video URL and published date
  video_url=$(echo "$line" | jq -r '.url')
  published_date=$(echo "$line" | jq -r '.upload_date')

  # Convert the published date to Unix timestamp
  video_timestamp=$(date -d "$published_date" +%s)

  # Check if the published date is before the cutoff date
  if [[ $video_timestamp -lt $CUTOFF_DATE ]]; then
    # Retrieve the video title using youtube-dl
    video_title=$(youtube-dl --get-title "$video_url")

    # Output video details in CSV format
    echo "$video_url,$video_title"
  fi
done
