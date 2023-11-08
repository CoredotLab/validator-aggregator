import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const goToApp = () => {
    router.push("/app/list");
  };

  const goToProfile = () => {
    router.push("/app/profile");
  };

  const goToDetail = () => {
    router.push("/app/detail");
  };

  return {
    goToApp,
    goToProfile,
    goToDetail,
  };
};
