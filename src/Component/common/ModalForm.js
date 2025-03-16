'use client'

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { motion } from 'framer-motion'

export default function ModalForm({ isOpen, onClose, title, children, onSubmit }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
            <div className="fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-0">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-3xl"
                >
                    <DialogPanel>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                {title}
                            </DialogTitle>
                            <div className="mt-2">{children}</div>
                        </div>
                    </DialogPanel>
                </motion.div>
            </div>
        </Dialog>
    )
}
