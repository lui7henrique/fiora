import { usePlayer } from "hooks/usePlayer"
import ReactPlayer from "react-player"

import { Container } from "./styles"

interface VideoPlayerProps {
  url: string
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  const { hidePlayer } = usePlayer()

  return (
    <Container onClick={hidePlayer}>
      <ReactPlayer controls url={url} playing volume={0.4} />
    </Container>
  )
}
