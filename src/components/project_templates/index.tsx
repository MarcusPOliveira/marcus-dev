import Image from 'next/image'

const templates = [
  {
    title: 'Login',
    image:
      'https://www.projectmanager.com/wp-content/uploads/2022/03/Kanban_Manufacturing_Wide_Zoom-150_Moving-task-to-new-status.jpg',
  },
  {
    title: 'Home',
    image:
      'https://www.projectmanager.com/wp-content/uploads/2022/03/Kanban_Manufacturing_Wide_Zoom-150_Moving-task-to-new-status.jpg',
  },
]

export const ProjectTemplates = () => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {templates.map((template, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {template.title}
          </h2>
          <Image
            src={template.image}
            alt={`Imagem da sessão ${template.title}`}
            width={1080}
            height={672}
            unoptimized
            className="aspect-auto w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </section>
  )
}
