import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Qr1 from '../img/Qr1.png';
import Qr2 from '../img/Qr2.png';
import Qr3 from '../img/Qr3.png';
import Qr4 from '../img/Qr4.png';
import Qr5 from '../img/Qr5.png';
import Qr6 from '../img/Qr6.png';
import Qr7 from '../img/Qr7.png';
import Qr8 from '../img/Qr8.png';
import Qr9 from '../img/Qr9.png';
import Qr10 from '../img/Qr10.png';
import Qr11 from '../img/Qr11.png';

const Appearance = () => {
    return (
        <>
            <div className="tab-2-hero">
                <h2>Appearance</h2>
                <p>Customize the style and template.</p>

                <div className="qr-code-tab">
                    <Tabs>
                        <div className="qr-tab-btn">
                            <TabList>
                                <Tab><button>Frame</button></Tab>
                                <Tab><button>Shape</button></Tab>
                                <Tab><button>Logo</button></Tab>
                                <Tab><button>Level</button></Tab>
                            </TabList>
                        </div>

                        <div className="qr-tab-box">
                            {/* Frame Tab */}
                            <TabPanel>
                                <div className="ar-bar-box">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Option 1</Tab>
                                            <Tab>Option 2</Tab>
                                            <Tab>Option 3</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr1} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr2} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr3} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr4} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr5} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr6} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr7} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr8} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr9} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            {/* Shape Tab */}
                            <TabPanel>
                                <div className="ar-bar-box">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Option 1</Tab>
                                            <Tab>Option 2</Tab>
                                            <Tab>Option 3</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr10} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr11} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr1} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr2} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr3} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr4} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr5} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr6} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr7} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            {/* Logo Tab */}
                            <TabPanel>
                                <div className="ar-bar-box">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Option 1</Tab>
                                            <Tab>Option 2</Tab>
                                            <Tab>Option 3</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr8} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr9} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr10} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr11} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr1} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr2} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr3} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr4} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr5} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>

                            {/* Level Tab */}
                            <TabPanel>
                                <div className="ar-bar-box">
                                    <Tabs>
                                        <TabList>
                                            <Tab>Option 1</Tab>
                                            <Tab>Option 2</Tab>
                                            <Tab>Option 3</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr6} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr7} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr8} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr9} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr10} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr11} alt="" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="qr-card">
                                                <img src={Qr1} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr2} alt="" />
                                            </div>
                                            <div className="qr-card">
                                                <img src={Qr3} alt="" />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Appearance;


