import './AddProduct.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl,_subcategoryapiurl,_productapiurl } from '../../api.url' ;

function AddProduct()
{
    
  const [file, setFile] = useState();
  const [title , setTitle] = useState('');
  const [catName , setCatName] = useState('');
  const [subCatName , setSubCatName] = useState('');
  const [description , setDescription] = useState();
  const [baseprice , setBasePrice] = useState();
  const [output , setOutput] = useState('');
  const [cDetails , setCategoryDetails ] = useState([]);
  const [ scDetails , setSubCategoryDetails ] = useState([]);

  useEffect(()=>{
  axios.get(_categoryapiurl+"fetch").then((response)=>{
  setCategoryDetails(response.data);
  }).catch((error)=>{
  console.log(error);
    });
       });         
       
  const fetchSubcat=(catnm)=>{
    setCatName(catnm);
    axios.get(_subcategoryapiurl+"fetch?catnm="+catnm).then((response)=>{
      setSubCategoryDetails(response.data);
    }).catch((error)=>{
      setSubCategoryDetails([]);
    });
  }

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('title', title);
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('description', description);
    formData.append('baseprice', baseprice);
    formData.append('uid', localStorage.getItem("email"));
    formData.append('picon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(_productapiurl+"save", formData, config).then((response) => {
      setTitle("");
      setCatName("");
      setSubCatName("");
      setDescription("");
      setBasePrice("");
      setOutput("Product Added Successfully");
    });
  }

  return(
  <>
  <div class="background-image">
  <div class="content-container">
    
  <form>
  <div class="form-group">
    <label for="catnm">Add Product Here</label>
    <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
      <option>Select Category</option>  
      {
        cDetails.map((row)=>(
          <option>{row.catnm}</option>    
        ))
      }
    </select>
  </div>
  <div class="form-group">
  <font color='blue'>{output}</font>
 
  <label for="ptitle">Title</label>
  <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)}/>
  </div>
  <div class="form-group">
  <font color='blue'>{output}</font>
  
  <label for="catnm">Sub Category Name:</label>
  <select class="form-control" value={subCatName} onChange={e => fetchSubcat(e.target.value)} >
  <option>Select Category</option>  
      {
        scDetails.map((row)=>(
          <option>{row.subcatnm}</option>    
        ))
      }
  </select>
  </div>
  <div class="form-group">
    <label for="description">Description:</label>
    <input type="text" class="form-control" value={description} onChange={e => setDescription(e.target.value)} />
  </div>
  
  <div class="form-group">
    <label for="baseprice">Base Price:</label>
    <input type="text" class="form-control" value={baseprice} onChange={e => setBasePrice(e.target.value)} />
  </div>
 
  <div class="form-group">
    <label for="picon">Product Icon:</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  
  <button onClick={handleSubmit} type="button" class="btn btn-danger">Add Product</button>
  
  </form>         
  </div>
  </div>
  </>
  );
}



export default AddProduct;