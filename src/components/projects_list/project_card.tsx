import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all hover:border-emerald-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          src="https://design4users.com/wp-content/uploads/2023/04/fitness-app-by-Odama.jpg"
          alt="Thumbnail do projeto"
          width={380}
          height={200}
          unoptimized
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          Nome do Projeto
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptas nam aliquid voluptatibus sapiente quam, ipsum ducimus quod
          eligendi quibusdam!
        </p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          Nextjs, Nextjs, Nextjs, Nextjs, Nextjs, Nextjs, Nextjs
        </span>
      </div>
    </div>
  )
}
