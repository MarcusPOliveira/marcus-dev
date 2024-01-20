import Lottie from 'lottie-react'

import LoadingAnimation from '../../../public/animations/loading.json'

export const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <Lottie
        animationData={LoadingAnimation}
        autoplay
        loop
        className="lg:h-1/2 lg:w-1/2"
        height={200}
        width={200}
      />
    </div>
  )
}
