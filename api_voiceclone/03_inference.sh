curl -k -X POST \
  -H "Content-type: application/json" \
  -H "Authorization: Basic c3BlZWNoX29vdjo0RDYkJiU5cWVFaHZSVGVS" \
  -d '{"session":"2","text":"Ngày xửa, ngày xưa, có một cô bé thường hay quàng chiếc khăn màu đỏ, vì vậy, mọi người gọi cô là cô bé quàng khăn đỏ.","pitch":1,"speed":1.0,"lang":"vi"}' \
  https://research.vinbase.ai/voiceclone/infer

# {
#   "code": "00", 
#   "error": "success", 
#   "full_audio": "/data/speech/TMP/1234/demo/f07ff03d-9bc7-400d-b54e-45ba195ea04c.wav", 
#   "infer_status": true, 
#   "target_audio": "/data/speech/TMP/1234/wavs_enhanced_22k/1234_0_271726_0.wav"
# }

# take full_audio for step 4
