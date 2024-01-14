curl -k -X POST \
  -H "Content-type: multipart/form-data" \
  -H "Authorization: Basic c3BlZWNoX29vdjo0RDYkJiU5cWVFaHZSVGVS" \
  -F "selectedFile=@giong5.m4a" \
  -F "data={\"session\":\"2\",\"youtubeURL\":\"\",\"checkedOverwrite\":\"true\"}" \
   https://research.vinbase.ai/voiceclone/validate

# {
#   "code": "00", 
#   "error": "success", 
#   "validate_status": true
# }
