curl -k -X POST \
  -H "Content-type: application/json" \
  -H "Authorization: Basic c3BlZWNoX29vdjo0RDYkJiU5cWVFaHZSVGVS" \
  -d '{"session":"2","trainingTime":0,"aligner":"", "denoiser":"","asr":"","speakerrate":"","balance":"","duration":"","checkedRetrain":"False"}' \
  https://research.vinbase.ai/voiceclone/train


# {
#   "code": "00", 
#   "error": "success", 
#   "train_status": true
# }
