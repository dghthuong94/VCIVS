# Voice clone API - be careful for private use

There are 4 steps:

- Validate audio: replace session and selectedFile (for each voice clone)

```bash 01_validate.sh```

- Train model: make sure the "session" the same with the ones using in validate step 

```bash 02_train.sh```

- Infer model: replace session of trained voice and text for inference

```bash 03_inference.sh```

- Get Clone voice: replace the CloneAudio with full_audio path receive from inference step

```bash 04_getaudio.sh```