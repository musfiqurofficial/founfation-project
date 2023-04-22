import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

const AfterSchoolFaq = () => {
    return (
        <div>
            {/* Faq question cover */}


            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-5xl">
                    <div className="space-y-6">
                        <Item title="Edgevana – AMD 7313 - 7313-256G-10G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">AMD 7313 EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">
                                    16 cores @ 3.0 GHz</p>
                                <p>Boot</p>
                                <p className="font-normal">1 x 480 GB SSD</p>
                                <p>Storage</p>
                                <p className="font-normal">
                                    1 TB NVMe + 2 TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">
                                    256 GB</p>
                                <p>Network</p>
                                <p className="font-normal">Dual 10Gbps NICs with 300 Mbps commit, burstable</p>
                                <p>Security</p>
                                <p className="font-normal">DDOS Protection Included on all servers</p>

                            </div>
                        </Item>

                        <Item title="Edgevana – AMD 7313 - 7313- 512G-10G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">AMD 7313 EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">
                                    16 cores @ 3.0 GHz</p>
                                <p>Boot</p>
                                <p className="font-normal">1 x 480 GB SSD</p>
                                <p>Storage</p>
                                <p className="font-normal">
                                    1 TB NVMe + 2 TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">
                                    512 GB</p>
                                <p>Network</p>
                                <p className="font-normal">Dual 10Gbps NICs with 300 Mbps commit, burstable</p>
                                <p>Security</p>
                                <p className="font-normal">DDOS Protection Included on all servers</p>

                            </div>
                        </Item>

                        <Item title="Edgevana – AMD Milan 7413 - 7413-256G-1G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">

                                    AMD Milan 7413 EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">

                                    24 cores @ 2.65 GHz</p>
                                <p>Boot</p>
                                <p className="font-normal">1 x 480 GB SSD</p>
                                <p>Storage</p>
                                <p className="font-normal">
                                    1 TB NVMe + 2 TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">
                                    256 GB</p>
                                <p>Network</p>
                                <p className="font-normal">Dual 1Gbps NICs with 300 Mbps commit, burstable</p>
                                <p>Security</p>
                                <p className="font-normal">DDOS Protection Included on all servers</p>

                            </div>
                        </Item>
                        <Item title="Edgevana – AMD Milan 7413 - 7413-256G-10G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">

                                    AMD Milan 7413 EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">

                                    24 cores @ 2.65 GHz</p>
                                <p>Boot</p>
                                <p className="font-normal">1 x 480 GB SSD</p>
                                <p>Storage</p>
                                <p className="font-normal">
                                    1 TB NVMe + 2 TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">
                                    256 GB</p>
                                <p>Network</p>
                                <p className="font-normal">Dual 10Gbps NICs with 300 Mbps commit, burstable</p>
                                <p>Security</p>
                                <p className="font-normal">DDOS Protection Included on all servers</p>

                            </div>
                        </Item>

                        <Item title="Edgevana – AMD Milan 7413 - 7413-512G-1G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">

                                    AMD Milan 7413 EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">

                                    24 cores @ 2.65 GHz</p>
                                <p>Boot</p>
                                <p className="font-normal">1 x 480 GB SSD</p>
                                <p>Storage</p>
                                <p className="font-normal">
                                    1 TB NVMe + 2 TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">
                                    512 GB</p>
                                <p>Network</p>
                                <p className="font-normal">Dual 10Gbps NICs with 300 Mbps commit, burstable</p>
                                <p>Security</p>
                                <p className="font-normal">DDOS Protection Included on all servers</p>

                            </div>
                        </Item>
                        <Item title="Edgevana – AMD Milan 7413 - 7413-512G-10G">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">


                                    AMD EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">


                                    24 cores @ 2.8 GHz</p>

                                <p>Storage</p>
                                <p className="font-normal">

                                    2 x 240 GB SDD + 2 x 3.8TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">

                                    256</p>
                                <p>Network</p>
                                <p className="font-normal">2 x 10 Gbps w/ 64TB of bundled outbound transfer (Inbound FoC)</p>
                                <p>OS</p>
                                <p className="font-normal">Ubuntu</p>

                            </div>
                        </Item>

                        <Item title="Equinix – w3amd.75xx24c. 256.4320.x86">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">


                                    AMD EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">



                                    24 cores @ 3.0 GHz</p>

                                <p>Storage</p>
                                <p className="font-normal">


                                    2 x 240 GB SDD + 1 x 3.8TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">

                                    256</p>
                                <p>Network</p>
                                <p className="font-normal">
                                    2x 25 Gbps w/ 64TB of bundled outbound transfer (Inbound FoC)</p>
                                <p>OS</p>
                                <p className="font-normal">Ubuntu</p>

                            </div>
                        </Item>
                        <Item title="Equinix – w3amd.75xx24c. 512.4320.x86">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">


                                    AMD EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">



                                    24 cores @ 3.0 GHz</p>

                                <p>Storage</p>
                                <p className="font-normal">


                                    2 x 240 GB SDD + 1 x 3.8TB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">


                                    512 GB</p>
                                <p>Network</p>
                                <p className="font-normal">
                                    2x 25 Gbps w/ 64TB of bundled outbound transfer (Inbound FoC)</p>
                                <p>OS</p>
                                <p className="font-normal">Ubuntu</p>

                            </div>
                        </Item>
                        <Item title="StackPath – SV1">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">


                                    AMD EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">



                                    32 cores @ 3.2 GHz</p>

                                <p>Storage</p>
                                <p className="font-normal">


                                    1920 GB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">


                                    256 GB</p>
                                <p>Network</p>
                                <p className="font-normal">

                                    Redundant 25Gb connectivity with 64.8TB of included bandwidth</p>
                                <p>OS</p>
                                <p className="font-normal">
                                    CentOS, Debian, Ubuntu</p>

                            </div>
                        </Item>
                        <Item title="StackPath – SV1">
                            <div className='grid grid-cols-2 gap-2'>
                                <p>CPU</p>
                                <p className="font-normal">


                                    AMD EPYC</p>
                                <p>Cores</p>
                                <p className="font-normal">



                                    32 cores @ 3.2 GHz</p>

                                <p>Storage</p>
                                <p className="font-normal">


                                    1920 GB NVMe</p>
                                <p>Memory</p>
                                <p className="font-normal">


                                    512 GB</p>
                                <p>Network</p>
                                <p className="font-normal">

                                    Redundant 25Gb connectivity with 64.8TB of included bandwidth</p>
                                <p>OS</p>
                                <p className="font-normal">
                                    CentOS, Debian, Ubuntu</p>

                            </div>
                        </Item>



                    </div>
                </div>
            </div>
        </div>
    );
};
export default AfterSchoolFaq;