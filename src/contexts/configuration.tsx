import { ProjectModel } from "commons/types/project.types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ConfigurationProps {
  children: React.ReactNode;
}

interface ConfigurationContextProps {
  activeProject: ProjectModel | undefined;
  setActiveProject: Dispatch<SetStateAction<ProjectModel | undefined>>;
}

const ConfigurationContext = createContext<ConfigurationContextProps>(
  {} as ConfigurationContextProps
);

export const ConfigurationProvider = ({ children }: ConfigurationProps) => {
  // const navigation = useNavigation();

  const [activeProject, setActiveProject] = useState<
    ProjectModel | undefined
  >();

  /*   useEffect(() => {

    if(activeProject) {
      navigation.navigate(PAGES.PROJECT, { id });
    }
  }, [activeProject]); */

  return (
    <ConfigurationContext.Provider
      value={{
        activeProject,
        setActiveProject,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

export function useConfiguration(): ConfigurationContextProps {
  const context = useContext(ConfigurationContext);
  return context;
}
