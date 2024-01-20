import Lottie from 'lottie-react'

import LoadingAnimation from '../../../public/animations/loading.json'

export const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <Lottie
        animationData={LoadingAnimation}
        autoplay
        loop
        height={200}
        width={200}
      />
    </div>
  )
}
