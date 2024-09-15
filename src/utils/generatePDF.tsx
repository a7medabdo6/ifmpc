import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = () => {
  const input = document.getElementById('content-to-print') as HTMLElement | null;

  if (input) {
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 20;
      const imgWidth = pdfWidth - 2 * margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);

      pdf.save('download.pdf');
    });
  } else {
    console.error('Element with ID "content-to-print" not found.');
  }
};


export const generatePDFProject = () => {
    const input = document.getElementById('content-to-printProject') as HTMLElement | null;
  
   
  if (input) {
    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 20;
      const imgWidth = pdfWidth - 2 * margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Log image dimensions for debugging
      console.log('Image Width:', imgWidth);
      console.log('Image Height:', imgHeight);

      pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
      pdf.save('download.pdf');
    }).catch((error) => {
      console.error('Error generating PDF:', error);
    });
  } else {
    console.error('Element with ID "content-to-print" not found.');
  }
  };
  