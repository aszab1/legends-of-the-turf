import axios from 'axios'

export default function ImageUploadField({ formData, setFormData }){

  async function handleImageUpload(e){
    const file = e.target.files[0]
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    // Create a new form to send to Cloudinary
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // Send the form data to the API endpoint
    const { data: { secure_url }} = await axios.post(endpoint, data)

    const newObj = {
      ...formData,
      image: secure_url
    }
    
    // send form data to image url
    setFormData(newObj)
    console.log(formData)

  }
  return (
    <>
    <input type='file' name="image" onChange={handleImageUpload} />
    </>
  )
}