'use client'

import {Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'
import {motion} from 'framer-motion'

export default function ModalConfirm({isOpen, onClose, onConfirm, title, description, confirmText = "Xóa"}) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity"/>
            <div className="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-0">
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -50}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg"
                >
                    <DialogPanel>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div
                                    className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:size-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-yellow-600"/>
                                </div>
                                <div className="sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        {title}
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6 justify-end">
                            <button
                                onClick={onClose}
                                className="inline-flex w-20 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={onConfirm}
                                className={`inline-flex w-20 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto
                                        ${confirmText === "Xác nhận"  ? "bg-blue-600 hover:bg-blue-500" :
                                    "bg-red-600 hover:bg-red-500"}`}
                            >
                                {confirmText}
                            </button>

                        </div>
                    </DialogPanel>
                </motion.div>
            </div>
        </Dialog>
    )
}

