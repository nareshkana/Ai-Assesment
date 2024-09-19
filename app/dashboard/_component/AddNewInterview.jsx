"use client"
import { Input } from '@/@/components/ui/input'
import { Textarea } from '@/@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Dialog ,DialogContent,DialogDescription,DialogHeader,DialogTitle,} from '@/components/ui/dialog'
import React, { useState } from 'react'

function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition,setjobPosition]=useState();
    const [jobDiscription,setjobDiscription]=useState();
    const [jobExperience,setjobExperience]=useState();
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(jobPosition,jobDiscription,jobExperience)
    }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary w-[300px] hover:scale-105 hover:shadow-md cursor-pointer transition-all '
      onClick={()=>setOpenDailog(true)}>
        <h2 className='text-lg text-center'>+Add New</h2>
      </div>
    
      <Dialog open={openDailog}>
        <DialogContent className='max-w-2xl'>
        <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>Tell About Your Learning Process</DialogTitle>
                <DialogDescription>
                <form onSubmit={onSubmit}>
                <div>
                    <h2>
                        Add details About Yourself
                    </h2>
                    <div className='mt-7 my-3'>
                        <label>Job Role/position</label>
                        <Input
                        placeholder="Ex. Full Stack Development"
                        required
                        onChange={(event) => setjobPosition(event.target.value)}
                        />

                    </div>
                    <div className=' my-3'>
                        <label>Job Discription</label>
                        <Textarea placeholder="Ex. React.js,Next.js"
                        required
                        onChange={(event)=>setjobDiscription(event.target.value)}/>
                    </div>
                    <div className='mt-7 my-3'>
                        <label>Year Experience</label>
                        <Input placeholder="Ex. 1-5 year" type="number"
                        required
                        onChange={(event)=>setjobExperience(event.target.value)}
                        />
                    </div>
                </div>
                <div className='flex gap-5 justify-end'>
                    <Button type="Button" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                    <Button type="Button">Start Interview</Button>
                </div>
                </form>
                </DialogDescription>
                
            </DialogHeader>
        </DialogContent>
      </Dialog>
     

    </div>
  )
}

export default AddNewInterview
