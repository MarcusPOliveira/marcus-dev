import Image from 'next/image'

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://media.licdn.com/dms/image/C4E0BAQHznLL_22pD6w/company-logo_200_200/0/1644257233136?e=2147483647&v=beta&t=WSDwh45SdUIYnQpkaLxR1xmgDgzUOFJnc50OpQJPbhI"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
    </div>
  )
}
