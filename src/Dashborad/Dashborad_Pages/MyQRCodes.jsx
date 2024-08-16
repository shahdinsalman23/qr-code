// MyQRCodes.js
import React, { useEffect } from 'react';
import AddMyQr from '../../img/myqrAdd.png';
import { Link } from 'react-router-dom';
import Eyeicon from '../../img/EyeQRCODES.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from '../../img/qrcodestoogle.png';
import QRCODE from '../../img/qrcodescode.png';
import ArrowLeft from '../../img/qrcodesleft.png';
import ArrowRight from '../../img/qrcoesright.png';
import Search from '../../img/qrSearch.png';
import QRCUT from '../../img/QRCUT.png';
import QRADD from '../../img/QRADDicon.png';
import QRBARCODE from '../../img/QRCODEbardcode.png';
import QRPEN from '../../img/QRPEN.png';
import QRDOYTSICONS from '../../img/qrcodedots.png';









const MyQRCodes = () => {
    return (
        <>
            <div className='MyQRCodes'>

                <div className="MyQRCodeshehader">
                    <h1>My QR Codes</h1>
                    <button>
                        <img src={AddMyQr} alt="add" />
                    </button>
                </div>

                <div className="MyQRCodes--main">

                    <div className="MyQRCodes--navbar">
                        <div className="MyQRCodes--navbar--left">
                            <Link to="">All </Link>
                            <Link to="">Static</Link>
                            <Link to="">Dynaimc</Link>
                            <Link to="">Favourites</Link>
                        </div>

                        <div className="MyQRCodes--navbar--right">
                            <div className="MyQRCodes--navbar--right--eye">
                                <img src={Eyeicon} alt="eyeicon" />
                                <h5>Visits</h5>
                            </div>
                            <div className="dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        Sort by: Most recent
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>


                            <div className="dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-Second">
                                        Quantity: 5
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>


                            <div className="MyQRCodes--navbar--right--Images">
                                <img src={Toggle} alt="Toggleimage" />
                                <img src={QRCODE} alt="QRCODE" />
                            </div>

                            <div className="pagenition">
                                <h1>1 of 1</h1>
                            </div>

                            <div className="MyQRCodes--navbar--right--arrows">
                                <img src={ArrowLeft} alt="" />
                                <img src={ArrowRight} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="MyQRCodes--second--navbar">
                        <div className="MyQRCodes--second--navbar--checkbox">
                            <label>
                                <input type="checkbox" />
                            </label>
                        </div>

                        <div className="MyQRCodes--second--navbar--search">
                            <img src={Search} alt="search" />
                            <input type="text" placeholder="Search" />
                        </div>


                        <div className="MyQRCodes--second--navbar--search">
                            <img src={QRCUT} alt="Cut" />
                            <input type="text" placeholder="QR code status: Active" />
                        </div>

                        <div className="MyQRCodes--second--navbar--ADD">
                            <img src={QRADD} alt="add" />
                            <input type="text" placeholder="QR code type" />
                        </div>

                    </div>


                    <div className="MyQRCodes--main--columns">
                        
                        <div className="MyQRCodes--text">


                            <div className="MyQRCodes--text--checkbox">
                            </div>

                            <div className="MyQRCodes--text--barcode">
                                <img src={QRBARCODE} alt="barcode" />
                            </div>


                            <div className="MyQRCodes--text--barcode--text">
                                <h3>Website</h3>
                                <h5>Untitled
                                    <img src={QRPEN} alt="pen" />
                                </h5>
                                <h6>Created: Aug 10, 2024</h6>
                            </div>

                            <div className="MyQRCodes--text--barcode--line">
                            </div>

                            <div className="MyQRCodes--text--afterline">

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                    </svg>
                                    <h3>No Folder</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                    </svg>

                                    <h3>http://www.patrickbloghossian.c...</h3>
                                </div>


                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                    </svg>

                                    <h3>Modified: Aug 10, 2024</h3>
                                </div>

                            </div>


                            <div className="MyQRCodes--text--scans">
                                <h3>0</h3>
                                <p>Scans</p>
                            </div>


                            <div className="MyQRCodes--text--buttons">
                                <button>Active</button>
                                <button>Detail</button>
                            </div>

                            <div className="MyQRCodes--text--freetrail">
                                <button>
                                    freeTrail
                                </button>
                            </div>


                            <div className="MyQRCodes--text--downlaods">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                </svg>

                                <button>
                                    <img src={QRDOYTSICONS} alt="icons" />
                                </button>
                            </div>


                        </div>

                        <div className="MyQRCodes--text">


                            <div className="MyQRCodes--text--checkbox">
                            </div>

                            <div className="MyQRCodes--text--barcode">
                                <img src={QRBARCODE} alt="barcode" />
                            </div>


                            <div className="MyQRCodes--text--barcode--text">
                                <h3>Website</h3>
                                <h5>Untitled
                                    <img src={QRPEN} alt="pen" />
                                </h5>
                                <h6>Created: Aug 10, 2024</h6>
                            </div>

                            <div className="MyQRCodes--text--barcode--line">
                            </div>

                            <div className="MyQRCodes--text--afterline">

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                    </svg>
                                    <h3>No Folder</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                    </svg>

                                    <h3>http://www.patrickbloghossian.c...</h3>
                                </div>


                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                    </svg>

                                    <h3>Modified: Aug 10, 2024</h3>
                                </div>

                            </div>


                            <div className="MyQRCodes--text--scans">
                                <h3>0</h3>
                                <p>Scans</p>
                            </div>


                            <div className="MyQRCodes--text--buttons">
                                <button>Active</button>
                                <button>Detail</button>
                            </div>

                            <div className="MyQRCodes--text--freetrail">
                                <button>
                                    freeTrail
                                </button>
                            </div>


                            <div className="MyQRCodes--text--downlaods">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                </svg>

                                <button>
                                    <img src={QRDOYTSICONS} alt="icons" />
                                </button>
                            </div>


                        </div>
                        

                        <div className="MyQRCodes--text">


                            <div className="MyQRCodes--text--checkbox">
                            </div>

                            <div className="MyQRCodes--text--barcode">
                                <img src={QRBARCODE} alt="barcode" />
                            </div>


                            <div className="MyQRCodes--text--barcode--text">
                                <h3>Website</h3>
                                <h5>Untitled
                                    <img src={QRPEN} alt="pen" />
                                </h5>
                                <h6>Created: Aug 10, 2024</h6>
                            </div>

                            <div className="MyQRCodes--text--barcode--line">
                            </div>

                            <div className="MyQRCodes--text--afterline">

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                    </svg>
                                    <h3>No Folder</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                    </svg>

                                    <h3>http://www.patrickbloghossian.c...</h3>
                                </div>


                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                    </svg>

                                    <h3>Modified: Aug 10, 2024</h3>
                                </div>

                            </div>


                            <div className="MyQRCodes--text--scans">
                                <h3>0</h3>
                                <p>Scans</p>
                            </div>


                            <div className="MyQRCodes--text--buttons">
                                <button>Active</button>
                                <button>Detail</button>
                            </div>

                            <div className="MyQRCodes--text--freetrail">
                                <button>
                                    freeTrail
                                </button>
                            </div>


                            <div className="MyQRCodes--text--downlaods">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                </svg>

                                <button>
                                    <img src={QRDOYTSICONS} alt="icons" />
                                </button>
                            </div>


                        </div>

                        <div className="MyQRCodes--text">


                            <div className="MyQRCodes--text--checkbox">
                            </div>

                            <div className="MyQRCodes--text--barcode">
                                <img src={QRBARCODE} alt="barcode" />
                            </div>


                            <div className="MyQRCodes--text--barcode--text">
                                <h3>Website</h3>
                                <h5>Untitled
                                    <img src={QRPEN} alt="pen" />
                                </h5>
                                <h6>Created: Aug 10, 2024</h6>
                            </div>

                            <div className="MyQRCodes--text--barcode--line">
                            </div>

                            <div className="MyQRCodes--text--afterline">

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                    </svg>
                                    <h3>No Folder</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                    </svg>

                                    <h3>http://www.patrickbloghossian.c...</h3>
                                </div>


                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                    </svg>

                                    <h3>Modified: Aug 10, 2024</h3>
                                </div>

                            </div>


                            <div className="MyQRCodes--text--scans">
                                <h3>0</h3>
                                <p>Scans</p>
                            </div>


                            <div className="MyQRCodes--text--buttons">
                                <button>Active</button>
                                <button>Detail</button>
                            </div>

                            <div className="MyQRCodes--text--freetrail">
                                <button>
                                    freeTrail
                                </button>
                            </div>


                            <div className="MyQRCodes--text--downlaods">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                </svg>

                                <button>
                                    <img src={QRDOYTSICONS} alt="icons" />
                                </button>
                            </div>


                        </div>


                        <div className="MyQRCodes--text">


                            <div className="MyQRCodes--text--checkbox">
                            </div>

                            <div className="MyQRCodes--text--barcode">
                                <img src={QRBARCODE} alt="barcode" />
                            </div>


                            <div className="MyQRCodes--text--barcode--text">
                                <h3>Website</h3>
                                <h5>Untitled
                                    <img src={QRPEN} alt="pen" />
                                </h5>
                                <h6>Created: Aug 10, 2024</h6>
                            </div>

                            <div className="MyQRCodes--text--barcode--line">
                            </div>

                            <div className="MyQRCodes--text--afterline">

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M2.5 5.3125V6.875H6.54C6.66318 6.87497 6.78515 6.85067 6.89893 6.80349C7.01271 6.7563 7.11608 6.68715 7.20312 6.6L8.49062 5.3125L7.20312 4.025C7.02748 3.84913 6.78918 3.75022 6.54063 3.75H4.0625C3.6481 3.75 3.25067 3.91462 2.95765 4.20765C2.66462 4.50067 2.5 4.8981 2.5 5.3125ZM1.25 5.3125C1.25 4.56658 1.54632 3.85121 2.07376 3.32376C2.60121 2.79632 3.31658 2.5 4.0625 2.5H6.54C6.82727 2.49998 7.11174 2.55654 7.37715 2.66646C7.64257 2.77638 7.88373 2.9375 8.08687 3.14063L9.63375 4.6875H15.9375C16.6834 4.6875 17.3988 4.98382 17.9262 5.51126C18.4537 6.03871 18.75 6.75408 18.75 7.5V14.6875C18.75 15.4334 18.4537 16.1488 17.9262 16.6762C17.3988 17.2037 16.6834 17.5 15.9375 17.5H4.0625C3.31658 17.5 2.60121 17.2037 2.07376 16.6762C1.54632 16.1488 1.25 15.4334 1.25 14.6875V5.3125ZM2.5 8.125V14.6875C2.5 15.1019 2.66462 15.4993 2.95765 15.7924C3.25067 16.0854 3.6481 16.25 4.0625 16.25H15.9375C16.3519 16.25 16.7493 16.0854 17.0424 15.7924C17.3354 15.4993 17.5 15.1019 17.5 14.6875V7.5C17.5 7.0856 17.3354 6.68817 17.0424 6.39515C16.7493 6.10212 16.3519 5.9375 15.9375 5.9375H9.63375L8.08687 7.48438C7.88373 7.6875 7.64257 7.84862 7.37715 7.95854C7.11174 8.06846 6.82727 8.12502 6.54 8.125H2.5Z" fill="#808080" />
                                    </svg>
                                    <h3>No Folder</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.6 9H20.4M3.6 15H20.4M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21M12.4999 3C14.1846 5.69961 15.0777 8.81787 15.0777 12C15.0777 15.1821 14.1846 18.3004 12.4999 21" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h3>Qrfy.io/r/LdT-dphIT-</h3>
                                </div>

                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="#808080" />
                                    </svg>

                                    <h3>http://www.patrickbloghossian.c...</h3>
                                </div>


                                <div className="MyQRCodes--text--afterline--folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2975 2.1839C13.0292 1.45212 14.0217 1.04102 15.0566 1.04102C16.0915 1.04102 17.084 1.45212 17.8158 2.1839C18.5476 2.91568 18.9587 3.90818 18.9587 4.94307C18.9587 5.97796 18.5476 6.97046 17.8158 7.70223L9.91079 15.6072C9.45912 16.0589 9.19412 16.3239 8.89745 16.5547C8.54856 16.8281 8.17356 17.06 7.77245 17.2506C7.43412 17.4114 7.07745 17.5306 6.47245 17.7322L3.69579 18.6572L3.02745 18.8806C2.76164 18.9693 2.47637 18.9822 2.20362 18.9179C1.93087 18.8536 1.68144 18.7146 1.48328 18.5164C1.28513 18.3183 1.1461 18.0688 1.08178 17.7961C1.01745 17.5233 1.03038 17.238 1.11912 16.9722L2.26745 13.5281C2.46912 12.9222 2.58829 12.5656 2.74912 12.2264C2.94023 11.8264 3.17218 11.4514 3.44495 11.1014C3.67495 10.8064 3.94079 10.5406 4.39245 10.0889L12.2975 2.1839ZM3.66662 17.3506L6.03412 16.5606C6.69329 16.3406 6.97329 16.2464 7.23412 16.1222C7.5519 15.97 7.84995 15.7858 8.12829 15.5697C8.35579 15.3914 8.56579 15.1839 9.05745 14.6922L15.3658 8.3839C14.5009 8.07742 13.7158 7.58078 13.0683 6.93057C12.4187 6.28292 11.9226 5.49782 11.6166 4.63307L5.30829 10.9414C4.81662 11.4322 4.60829 11.6414 4.43079 11.8697C4.21412 12.1475 4.02995 12.4456 3.87829 12.7639C3.75412 13.0247 3.65995 13.3047 3.43995 13.9639L2.64995 16.3331L3.66662 17.3506ZM12.6291 3.6189C12.6583 3.76473 12.7058 3.96307 12.7866 4.1939C13.0304 4.89144 13.4293 5.52456 13.9533 6.04557C14.4741 6.56943 15.1069 6.96833 15.8041 7.21223C16.0358 7.29307 16.2341 7.34057 16.38 7.36973L16.9316 6.81807C17.426 6.32019 17.7029 5.64665 17.7017 4.94499C17.7005 4.24333 17.4212 3.57076 16.9251 3.07462C16.4289 2.57847 15.7564 2.29919 15.0547 2.29797C14.353 2.29674 13.6795 2.57366 13.1816 3.06807L12.6291 3.6189Z" fill="#808080" />
                                    </svg>

                                    <h3>Modified: Aug 10, 2024</h3>
                                </div>

                            </div>


                            <div className="MyQRCodes--text--scans">
                                <h3>0</h3>
                                <p>Scans</p>
                            </div>


                            <div className="MyQRCodes--text--buttons">
                                <button>Active</button>
                                <button>Detail</button>
                            </div>

                            <div className="MyQRCodes--text--freetrail">
                                <button>
                                    freeTrail
                                </button>
                            </div>


                            <div className="MyQRCodes--text--downlaods">

                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M13.9998 18.667L8.1665 12.8337L9.79984 11.142L12.8332 14.1753V4.66699H15.1665V14.1753L18.1998 11.142L19.8332 12.8337L13.9998 18.667ZM6.99984 23.3337C6.35817 23.3337 5.80906 23.1054 5.3525 22.6488C4.89595 22.1923 4.66728 21.6428 4.6665 21.0003V17.5003H6.99984V21.0003H20.9998V17.5003H23.3332V21.0003C23.3332 21.642 23.1049 22.1915 22.6483 22.6488C22.1918 23.1062 21.6423 23.3344 20.9998 23.3337H6.99984Z" fill="black" />
                                </svg>

                                <button>
                                    <img src={QRDOYTSICONS} alt="icons" />
                                </button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyQRCodes;
