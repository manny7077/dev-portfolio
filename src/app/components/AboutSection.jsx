"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'

const AboutSection = () => {
    const [tab, setTab] =useState("skills")
    const [isPending, startTransition] =useTransition()

    const handleTabChange = (id)=> {
        startTransition(() => {
            setTab(id)
        }

        )
    }
  return (
    <section id="about" className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/Images/Image 7.jpeg" alt="" width={800} height={800} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>HIS ACHEIVEMENTS</h2>
          <ul>
      <li>He served as the Project Lead for the following:
        <ul>
          <li>the first GRIDCo Paperless Office Project, the first Decongestion and Digitization of GRIDCo Records, the Knowledge Management Portal Migration, the development of the Knowledge Management Portal, and the review and update of IT Policies/Procedures;</li>
          </ul>
      <li>He was the Project Secretary for the Enterprise Architecture Project (i.e. Smart Workplace Project) and the MIS Change Management Board;</li>
      </li>He served as a member for the following: 
        <ul>
          <li>Computron Version 15 (FINMAT/MAGIQ/G2) Upgrade Project, the Corporate Intranet Portal Development Project, the Industrial Online Training Program Project, the Computron Version 12 Migration Project;
          </li>
        </ul>
        <li>He supervised the development of the first Infirmary Management System, the first Suppliers’ Registration Database, an electronic voting system for in-house elections. He contributed to the development and rollout of the new and refreshed corporate website;</li>
        <li>He provided IT technical assistance to GRIDCo’s 10th Anniversary Committee;</li>
        <li>He drafted the initial Paperless Office Policy document;</li>
        <li>He led the RFP and Procurement Program Team with the mandate to facilitate procurement processes for key items required for the operations of the MIS section;</li>
        <li>He was part of the data team that identified and extracted Finance data from the Computron (FINMAT) Software system for migration into the new ERP (Enterprise Resource Planning) system;</li>
        <li>He assisted in the organization and facilitation of numerous Computer Skills, Cyber Security, Data Protection and Privacy and IT related training programmes in all operational areas within the company;
        </li>
        <li>He was the technical person in charge of AutoCAD installation and configuration.</li>
      </ul>

            
        </div>
    </div>
    </section>
  )
}

export default AboutSection