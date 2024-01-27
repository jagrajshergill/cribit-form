import React, {useState} from 'react';


    const MyForm = () => {
        // Data Hold 
        const [formData, setFormData] = useState({
          movieTitle: '',
          email: '',
          phoneNumber: '', 
          streetAddress: '',
          city: '',
          state: '',
          postcode: '',
          genres: [],
          description: '',
        });
      
        // Input Changes & Bringing the data together, need previous array
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };

        //Genre Toggle Thingy
        const handleGenreToggle = (genre) => {
            console.log('Form Data Submitted:', genre)
            if (!formData.genres.includes(genre)){
                setFormData({...formData, genres: [...formData.genres, genre]})
            }else{
                setFormData({...formData, genres: formData.genres.filter((g, i) => g !== genre)});
            }
        }
      
        // Submission Handling
        const handleSubmit = (e) => {
          e.preventDefault();
          // Bring Data to Console Log
          console.log('Form data submitted:', formData);
        };
    

        return(
            
            <div>
                <nav className="nav-container">
                    <div className="nav-item">Logo</div>
                    <div className="flex">
                        <div className="nav-item">About</div>
                        <div className="nav-item">Post Listing</div>
                    </div>
                </nav>

                <div className="form-container"
                onSubmit={handleSubmit}>
                    <h1>Post a Listing</h1>

                    <h2>Title</h2>
                    <label>
                        <input
                        placeholder="Give your post a title!"
                        type="text"
                        name="movieTitle"
                        value={FormData.movieTitle}
                        onChange={handleInputChange}
                        />
                    </label>
                    <br/>
        
                    <h2>Contact</h2>
                    <label className="contact-container">
                        <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={FormData.email}
                        onChange={handleInputChange}
                        />
        
                        <input
                        placeholder="Phone Number"
                        type="tel"
                        name="phoneNumber"
                        value={FormData.phoneNumber}
                        onChange={handleInputChange}
                        />
                    </label>
                    <br/>
        
                    <h2>Address</h2>
                    <div className="address-container">
                        <div>
                        <input
                        className=""
                        placeholder="Street Address"
                        type="text"
                        name="streetAddress"
                        value={FormData.streetAddress}
                        onChange={handleInputChange}
                        />
                        </div>
                        <div className="city-state-code-container">
                            <input
                            placeholder="City"
                            type="text"
                            name="city"
                            value={FormData.city}
                            onChange={handleInputChange}
                            />
                            <input
                            placeholder="State"
                            type="text"
                            name="state"
                            value={FormData.state}
                            onChange={handleInputChange}
                            />
                            <input
                            placeholder="Postcode"
                            type="text"
                            name="postcode"
                            value={FormData.postcode}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br/>
        
                    <h2>Genres</h2>
                    <div className="row1">
                        <button className={`btn ${formData.genres.includes('Horror Films') && 'active'}`} onClick={ () => handleGenreToggle('Horror Films')}>Horror Films</button>
                        <button className={`btn ${formData.genres.includes('Anime') && 'active'}`} onClick={ () => handleGenreToggle('Anime')}>Anime</button>
                        <button className={`btn ${formData.genres.includes('Documentary') && 'active'}`} onClick={ () => handleGenreToggle('Documentary')}>Documentary</button>
                    </div>
                    <div className="row2">
                        <button className={`btn ${formData.genres.includes('asd') && 'active'}`} onClick={ () => handleGenreToggle('asd')} >asd</button>
                        <button className={`btn ${formData.genres.includes('Neo Noir Films') && 'active'}`} onClick={ () => handleGenreToggle('Neo Noir Films')}>Neo Noir Films</button>
                        <button className={`btn ${formData.genres.includes('Action Films') && 'active'}`} onClick={ () => handleGenreToggle('Action Films')}>Action Films</button>
                    </div>
                    <div className="row3">
                        <button className={`btn ${formData.genres.includes('Drama/Romance Films') && 'active'}`} onClick={ () => handleGenreToggle('Drama/Romance Films')}>Drama/Romance Films</button>
                        <button className={`btn ${formData.genres.includes('For Kids') && 'active'}`} onClick={ () => handleGenreToggle('For Kids')}>For Kids</button>
                        <button className={`btn ${formData.genres.includes('TV') && 'active'}`} onClick={ () => handleGenreToggle('TV')}>TV</button>
                        <button className={`btn ${formData.genres.includes('Shows') && 'active'}`} onClick={ () => handleGenreToggle('Shows')}>Shows</button>
                    </div>
                    <br/>
        
                    <h2>Description</h2>    
                    <label>
                        <textarea
                        rows="10"
                        placeholder="Any other information you want to include ... or leave a friendly message!"
                        name="description"
                        value={FormData.description}
                        onChange={handleInputChange}
                        />
                    </label>
                    <br/>
        
                    <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
        
                </div>


                <footer className="footer-container">
                    <div className="left-footer"><p>Stay Connected With Us</p>
                    <div className="box-container">
                    <div className="box"></div>
                        <div className="box"></div>
                        <div className="box"></div>
                    </div>
                    <div className="box-2-container">
                        <div className="box-2"></div>
                        <div>cribit@gmail.com</div>
                    </div>

                    </div>

                    <div className="middle-footer">
                        &#169; 2024 Cribit
                    </div>
                    <div className="right-footer">
                        <p>We'd love to hear from you</p>
                        <textarea
                        rows="5"
                        placeholder="Share your feedback with us!"
                        />
                        <button className="contact-btn">Submit</button>
                    </div>
                </footer>
            </div>
        );
    
    };


export default MyForm