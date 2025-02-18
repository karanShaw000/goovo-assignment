import React from 'react'

interface FileTypeContraintsBadgesProps {
  typeArray: string[]
  size: number
  sizeType: "MB" | "SEC"
}

export const FileTypeContraintsBadges = ({ typeArray, size, sizeType }: FileTypeContraintsBadgesProps) => {
  return (
    <div className='text-sm md:text-base flex justify-center items-center gap-4 w-full'>
      {
        typeArray.map((type) => <div key={type} className='shadow-lg py-1.5 px-4 rounded-md bg-primary-foreground/60 text-gray-400'>{type.split('/')[1].toUpperCase()}</div>)
      }
      <div className='shadow-lg py-1.5 px-4 rounded-md bg-transparent text-gray-400 border border-gray-400'>&lt; {size} {sizeType}</div>
    </div>
  )
}
