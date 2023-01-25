import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function FAQ() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <section className="text-gray-700">
                <div className="container px-5 py-24 mx-auto">
                    <div className=' text-center my-8'>
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> Frequently Asked Question</h1>
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                        </div>
                    </div>
                    <div>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab label="Client FAQs" {...a11yProps(0)} sx={{ fontWeight: 'bold', textTransform: 'capitalize', color: '#1E3A8A' }} />
                                    <Tab label="candidate FAQs" {...a11yProps(1)} sx={{ fontWeight: 'bold', textTransform: 'capitalize', color: '#1E3A8A' }} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className="space-y-4">
                                    <details
                                        className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                                        open=""
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                What payment method do you offer?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            By and large, credit cards are easily the most secure and
                                            safe payment method to use when you shop online. Credit
                                            cards use online security features like encryption and
                                            fraud monitoring to keep your accounts and personal
                                            information safe
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                What is a custom test?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Do you provide role-based access control?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Is my data safe?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className="space-y-4">
                                    <details
                                        className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                                        open=""
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-xl font-semibold  text-blue-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Ab hic veritatis molestias culpa in, recusandae laboriosam
                                            neque aliquid libero nesciunt voluptate dicta quo officiis
                                            explicabo consequuntur distinctio corporis earum
                                            similique!
                                        </p>
                                    </details>
                                </div>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </section>
        </div>
    );
}
