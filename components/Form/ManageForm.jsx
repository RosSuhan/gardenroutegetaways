'use client'
import Styles from './manageForm.module.css'

export default function ManageForm(){
    return (
        <>
        <form 
            method="post" 
            action="https://formspree.io/f/xblobdle" 
            className={Styles.contactForm} 
            id="ContactForm"
        >
            <div 
                className={Styles.formIntroBlock}
            >
                <cite>Thank you for considering us to manage your accommodation.</cite>
    
                <div 
                    className={Styles.formRowBlock}
                >
                    <label htmlFor="ownerName">
                        Owner Name:
                    </label>
                    <input 
                        type="text" 
                        name="ownerName" 
                        id="ownerName" 
                        oninvalid="this.setCustomValidity('Please enter your name')" 
                        oninput="this.setCustomValidity('')" 
                        className={Styles.contactformInput}
                    />
                </div>
        
                <div 
                    className={Styles.formRowBlock}
                >
                    <label 
                    htmlFor="address"
                    >
                        Address:
                    </label>
                    
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        className={Styles.contactformInput}
                    />
                </div>
        
                <div 
                    class={Styles.formRowBlock}
                >
                    <label 
                        htmlFor="contactNumber"
                    >
                        Phone:
                    </label>

                    <input 
                        type="tel" 
                        name="contactNumber" 
                        id="contactNumber" 
                        className={Styles.contactformInput}
                    />
                </div>

                <div 
                    className={Styles.formRowBlock}
                >
                    <label 
                        htmlFor="email"
                    >
                            Email:
                    </label>

                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className={Styles.contactformInput}
                    />
                </div>
                
                <div 
                    className={Styles.formRowBlock}
                >
                    <label 
                        htmlFor="size"
                    >
                        Size: (m&#178;)
                    </label>

                    <input 
                        type="text" 
                        name="size" 
                        id="size" 
                        className={Styles.contactformInput}
                    />
                </div>
            </div>

            <div 
                className={Styles.facilitiesBlock}
            >
                <h3 
                    className={Styles.blockHeader}
                >
                    Facilities
                </h3>
                <div 
                    className={Styles.optionBlock}
                >
                    {/* <!-- furniture --> */}
                    <div 
                        className={Styles.options}
                    >
                        <label 
                            htmlFor="furniture-available" 
                            className={Styles.optionsLabel}
                        >
                            Quality Furniture:
                        </label>

                        <input 
                            list="furniture" 
                            id="furniture-available" 
                            name="furniture" 
                            className={Styles.optionsInput}
                        />

                        <datalist id="furniture">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- DSTV --> */}
                    <div className={Styles.options}>
                        <label 
                            htmlFor="dstv-available" 
                            className={Styles.optionsLabel}
                        >
                                DSTV
                        </label>

                        <input 
                            list="dstv" 
                            id="dstv-available" 
                            name="dstv" 
                            className={Styles.optionsInput}/>

                        <datalist id="dstv">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Fans or Aircons --> */}
                    <div 
                        className={Styles.options}
                    >
                        <label htmlFor="fans-available" className={Styles.optionsLabel}>Fans / Aircons</label>
                        <input list="fans" id="fans-available" name="fans" className={Styles.optionsInput}/>

                        <datalist id="fans">
                            <option value="Fans"></option>
                            <option value="Aircons"></option>
                            <option value="Both"></option>
                        </datalist>
                    </div>

                    {/* <!-- sets of linen --> */}
                    <div className={Styles.options}>
                        <label htmlFor="linen" className={Styles.optionsLabel}>Sets of Linen & Towels</label>
                        <input type="number" name="linen" id="linen" min="0" className={Styles.optionsInput}/>
                    </div>

                    {/* <!-- Netflix --> */}
                    <div className={Styles.options}>
                        <label htmlFor="netflix-available" className={Styles.optionsLabel}>Netflix</label>
                        <input list="netflix" id="netflix-available" name="netflix" className={Styles.optionsInput}/>

                        <datalist id="netflix">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Parking --> */}
                    <div className={Styles.options}>
                        <label htmlFor="parking-available" className={Styles.optionsLabel}>Parking</label>
                        <input list="parking" id="parking-available" name="parking" className={Styles.optionsInput}/>

                        <datalist id="parking">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Wifi --> */}
                    <div className={Styles.options}>
                        <label htmlFor="wifi-available" className={Styles.optionsLabel}>Wifi / Fibre</label>
                        <input list="wifi" id="wifi-available" name="wifi" className={Styles.optionsInput}/>

                        <datalist id="wifi">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- no of rooms --> */}
                    <div className={Styles.options}>
                        <label htmlFor="linen" className={Styles.optionsLabel}>No. of bedrooms</label>
                        <input type="number" name="rooms" id="rooms" min="0" className={Styles.optionsInput}/>
                    </div>

                    {/* <!-- PRV stock cupboard --> */}
                    <div className={Styles.options}>
                        <label htmlFor="PRV-available" className={Styles.optionsLabel}>PRV stock cupboard</label>
                        <input list="PRV" id="PRV-available" name="PRV" className={Styles.optionsInput}/>

                        <datalist id="PRV">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Television --> */}
                    <div className={Styles.options}>
                        <label htmlFor="Television-available" className={Styles.optionsLabel}>Television</label>
                        <input list="Television" id="Television-available" name="Television" className={Styles.optionsInput}/>

                        <datalist id="Television">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- No. of bathrooms --> */}
                    <div className={Styles.options}>
                        <label htmlFor="bathrooms" className={Styles.optionsLabel}>No. of bedrooms</label>
                        <input type="number" name="bathrooms" id="bathrooms" min="0" className={Styles.optionsInput}/>
                    </div>

                    {/* <!-- Washing Machine --> */}
                    <div className={Styles.options}>
                        <label htmlFor="washing-available" className={Styles.optionsLabel}>Washing Machine</label>
                        <input list="washing" id="washing-available" name="washing" className={Styles.optionsInput}/>

                        <datalist id="washing">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Equipped Kitchen --> */}
                    <div className={Styles.options}>
                        <label htmlFor="kitchen-available" className={Styles.optionsLabel}>Equipped Kitchen</label>
                        <input list="kitchen" id="kitchen-available" name="kitchen" className={Styles.optionsInput}/>

                        <datalist id="kitchen">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- No. of showers --> */}
                    <div className={Styles.options}>
                        <label htmlFor="showers" className={Styles.optionsLabel}>No. of Showers</label>
                        <input type="number" name="showers" id="showers" min="0" className={Styles.optionsInput}/>
                    </div>

                    {/* <!-- Tumble Dryer --> */}
                    <div className={Styles.options}>
                        <label htmlFor="dryer-available" className={Styles.optionsLabel}>Tumble Dryer</label>
                        <input list="dryer" id="dryer-available" name="dryer" className={Styles.optionsInput}/>

                        <datalist id="dryer">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Braai Facilities --> */}
                    <div className={Styles.options}>
                        <label htmlFor="Braai-available" className={Styles.optionsLabel}>Braai Facilities</label>
                        <input list="Braai" id="Braai-available" name="Braai" className={Styles.optionsInput}/>

                        <datalist id="Braai">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- No. of baths --> */}
                    <div className={Styles.options}>
                        <label htmlFor="baths" className={Styles.optionsLabel}>No. of Showers</label>
                        <input type="number" name="baths" id="baths" min="0" className={Styles.optionsInput}/>
                    </div>

                    {/* <!-- Dishwasher Available --> */}
                    <div className={Styles.options}>
                        <label htmlFor="Dishwasher-available" className={Styles.optionsLabel}>Dishwasher Available</label>
                        <input list="Dishwasher" id="Dishwasher-available" name="Dishwasher" className={Styles.optionsInput}/>

                        <datalist id="Dishwasher">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- beach / pool towels --> */}
                    <div className={Styles.options}>
                        <label htmlFor="towels-available" className={Styles.optionsLabel}>Beach / Pool Towels</label>
                        <input list="towels" id="towels-available" name="towels" className={Styles.optionsInput}/>

                        <datalist id="towels">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Heating --> */}
                    <div className={Styles.options}>
                        <label htmlFor="heating-available" className={Styles.optionsLabel}>Heating</label>
                        <input list="heating" id="heating-available" name="heating" className={Styles.optionsInput}/>

                        <datalist id="heating">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Pool --> */}
                    <div className={Styles.options}>
                        <label htmlFor="pool-available" className={Styles.optionsLabel}>Pool</label>
                        <input list="pool" id="pool-available" name="pool" className={Styles.optionsInput}/>

                        <datalist id="pool">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- outdoor seating --> */}
                    <div className={Styles.options}>
                        <label htmlFor="seating-available" className={Styles.optionsLabel}>Outdoor Seating</label>
                        <input list="seating" id="seating-available" name="seating" className={Styles.optionsInput}/>

                        <datalist id="seating">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- patio --> */}
                    <div className={Styles.options}>
                        <label htmlFor="patio-available" className={Styles.optionsLabel}>Patio</label>
                        <input list="patio" id="patio-available" name="patio" className={Styles.optionsInput}/>

                        <datalist id="patio">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- solar --> */}
                    <div className={Styles.options}>
                        <label htmlFor="solar-available" className={Styles.optionsLabel}>Solar</label>
                        <input list="solar" id="solar-available" name="solar" className={Styles.optionsInput}/>

                        <datalist id="solar">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- sea view --> */}
                    <div className={Styles.options}>
                        <label htmlFor="seaView-available" className={Styles.optionsLabel}>Sea View</label>
                        <input list="seaView" id="seaView-available" name="seaView" className={Styles.optionsInput}/>

                        <datalist id="seaView">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- pets --> */}
                    <div className={Styles.options}>
                        <label htmlFor="pets-available" className={Styles.optionsLabel}>Pets Allowed</label>
                        <input list="pets" id="pets-available" name="pets" className={Styles.optionsInput}/>

                        <datalist id="pets">
                            <option value="Yes"></option>
                            <option value="No"></option>
                        </datalist>
                    </div>

                    {/* <!-- Electricity --> */}
                    <div className={Styles.options}>
                        <label htmlFor="electricity-available" className={Styles.optionsLabel}>Electricity</label>
                        <input list="electricity" id="electricity-available" name="electricity" className={Styles.optionsInput}/>

                        <datalist id="electricity">
                            <option value="Yes"></option>
                            <option value="No"></option>
                            <option value="Prepaid"></option>
                        </datalist>
                    </div>
                </div>

                <h3 className={Styles.blockHeader}>Seasons</h3>
                <div className={Styles.seasonsRow}>
                    <h4 className={Styles.seasonsRowHeading}>Expected Rates</h4>
                    <div className={Styles.priceBlock}>
                        <label htmlFor="lowPrice" className={Styles.priceLabel}>Low</label>
                        <input type="text" name="lowPrice" id="lowPrice" className={Styles.priceInput}/>
                    </div>

                    <div className={Styles.priceBlock}>
                        <label htmlFor="highPrice" className={Styles.priceLabel}>High</label>
                        <input type="text" name="highPrice" id="highPrice" className={Styles.priceInput}/>
                    </div>

                    <div className={Styles.priceBlock}>
                        <label htmlFor="peakPrice" className={Styles.priceLabel}>Peak</label>
                        <input type="text" name="peakPrice" id="peakPrice" className={Styles.priceInput}/>
                    </div>
                </div>

                <div className={Styles.additionalBlock}>
                    <label htmlFor="additionalInfo">Additional Information:</label>
                    <textarea name="additionalInfo" id="additionalInfo" rows="5" placeholder="Please let us know if there is anything else we need to be aware of." className={Styles.additionalInput}></textarea>
                </div>
            </div>

            <input type="submit" value="Send Application" className={Styles.submitButton}/>
        </form>
        </>
    )
}