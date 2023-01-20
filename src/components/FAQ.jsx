import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        'aria-controls': `simple-tabpanel-${index}`,
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
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Client FAQs" {...a11yProps(0)} />
                                    <Tab label="candidate FAQs" {...a11yProps(1)} />
                                    <Tab label="Help center" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <div className="space-y-4">
                                    <details
                                        className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden"
                                        open=""
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-2xl font-semibold  text-blue-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
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
                                            <h2 className="text-2xl font-semibold  text-blue-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="border-left-2 shadow-xl p-6 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between cursor-pointer">
                                            <h2 className="text-lg font-medium text-gray-900">
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
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <div className="space-y-4">
                                    <details className="group [&_summary::-webkit-details-marker]:hidden" open="">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer shadow-xl">
                                            <h2 className="font-medium text-gray-900">
                                                Lorem ipsum dolor sit amet consectetur adipisicing?
                                            </h2>
                                            <svg
                                                className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="px-4 mt-4 leading-relaxed text-gray-700">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                            molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                            voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                            earum similique!
                                        </p>
                                    </details>
                                </div>
                            </TabPanel>
                        </Box>
                    </div>
                </div>
            </section>
        </div>
    )
}
