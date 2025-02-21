
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "../../store/useStore";
import { Folder, MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TaskFormInputsProps {
  title: string;
  setTitle: (title: string) => void;
  projectId: string | null;
  setProjectId: (id: string | null) => void;
  contextId: string | null;
  setContextId: (id: string | null) => void;
}

export const TaskFormInputs = ({
  title,
  setTitle,
  projectId,
  setProjectId,
  contextId,
  setContextId,
}: TaskFormInputsProps) => {
  const store = useStore();

  return (
    <>
      <Select value={projectId || "none"} onValueChange={setProjectId}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-8 h-8 p-0 bg-white">
                <Folder className="h-4 w-4 text-black" />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <SelectContent>
          <SelectItem value="none">Project</SelectItem>
          {store.projects.map((project) => (
            <SelectItem key={project.id} value={project.id}>
              {project.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={contextId || "none"} onValueChange={setContextId}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-8 h-8 p-0 bg-white">
                <MapPin className="h-4 w-4 text-black" />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Context</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <SelectContent>
          <SelectItem value="none">Context</SelectItem>
          {store.contexts.map((context) => (
            <SelectItem key={context.id} value={context.id}>
              {context.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
