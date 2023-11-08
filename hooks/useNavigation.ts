import { useRouter } from "next/navigation";

export const useNavigation = () => {
  const router = useRouter();

  const goToApp = () => {
    router.push("/app/list");
  };

  const goToProfile = () => {
    router.push("/app/profile");
  };

  return {
    goToApp,
    goToProfile,
  };
};
