module.exports = {
    "search for people": `
      Use the \`api.crustdata.com/screener/person/search\` endpoint.
      Example:
      \`\`\`
      curl --location 'https://api.crustdata.com/screener/person/search' \\
      --header 'Content-Type: application/json' \\
      --header 'Authorization: Token $token' \\
      --data '{
        "filters": [
          { "filter_type": "CURRENT_COMPANY", "type": "in", "value": ["openai.com"] },
          { "filter_type": "CURRENT_TITLE", "type": "in", "value": ["engineer"] },
          { "filter_type": "REGION", "type": "in", "value": ["San Francisco, California, United States"] }
        ],
        "page": 1
      }'
      \`\`\`
    `,
    "region values": `
      Yes, there’s a specific list of regions. Please refer to:
      [Updated Regions List](https://crustdata-docs-region-json.s3.us-east-2.amazonaws.com/updated_regions.json).
    `,
    // Add more static responses here
  };
  