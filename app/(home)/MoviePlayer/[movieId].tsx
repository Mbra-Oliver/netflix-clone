import { useLocalSearchParams } from "expo-router";
import VideoPlayerBox from "../../../components/VideoPlayer/videoPlayerBox";

const FullScreenMoviePlayer = () => {
  const params = useLocalSearchParams();
  console.log(params);

  return <VideoPlayerBox />;
};

export default FullScreenMoviePlayer;
