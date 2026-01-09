"use client";
import { IoPrintOutline } from "react-icons/io5";

const PrintPDFButton = (data) => {
    const id = data.id
    
    const handlePrint = (e, id) => {
        e.preventDefault();
        const printLink = `/recipes/${id}/pdf`;
        window.open(`${process.env.API_URL + printLink}`, "_blank");
    };

    return (
        <button
            onClick={(e) => handlePrint(e, id)}
            className="leading-none inline-flex items-center gap-2
                 rounded-2xl bg-[#222222] px-4 py-1
                 text-xs font-medium text-white hover:text-[#ffcf60]
                 hover:cursor-pointer transition mr-2"
        >
            <span>Download Recipe PDF</span>
            <IoPrintOutline className="text-xl" />
        </button>
    )
}

export default PrintPDFButton