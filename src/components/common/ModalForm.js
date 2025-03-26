'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion } from 'framer-motion'



export default function ModalForm({ isOpen, onClose, title, children, width = "w-full max-w-3xl" }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-0 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative ${width} transform overflow-hidden rounded-lg bg-white shadow-xl`}
                >
                    <DialogPanel>
                        <DialogTitle
                            as="h3"
                            className="px-4 py-3 text-2xl font-semibold text-gray-900 border-b rounded-t-lg"
                        >
                            {title}
                        </DialogTitle>
                        <div className="p-4 max-h-[80vh] overflow-y-auto">
                            {children}
                        </div>
                    </DialogPanel>
                </motion.div>
            </div>
        </Dialog>
    )
}
