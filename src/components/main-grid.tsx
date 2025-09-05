import React from "react";
import { motion } from "framer-motion";
import Items from "@/store/grid-data";
import EducationCard from "./cards/educaton";
import EducationDetails from "./cards/details/education";
import ProfileCard from "./cards/profile";
import ProjectsCard from "./cards/proejct";
import MessageCard from "./cards/message";
import ProjectDetails from "./cards/details/project";
import SkillSetDetails from "./cards/details/skillSet";
import SkillSet from "./cards/skillSet";
import TestemonialsCard from "./cards/testemonials";
import SocialCard from "./cards/social";
import StatsCard from "./cards/stats";
import ContactsCard from "./cards/contact";
import TestimonialsDetails from "./cards/details/testimonials";
import SocialDetails from "./cards/details/social";
import ContactDetails from "./cards/details/contact";
import { useUI } from "@/contexts/ui-provider";
import { useExpanded } from "@/contexts/expand-provider";

// ... imports of cards same as before ...

export default function MainGrid() {
  const { animations } = useUI();
  const { activeIndices, expand, expanded } = useExpanded();

  const componentMap: Record<string, React.ElementType> = {
    ProfileCard,
    EducationCard,
    EducationDetails,
    ProjectsCard,
    MessageCard,
    ProjectDetails,
    SkillSetDetails,
    SkillSet,
    TestemonialsCard,
    SocialCard,
    StatsCard,
    ContactsCard,
    TestimonialsDetails,
    SocialDetails,
    ContactDetails,
  };

  return (
    <div className="max-w-7xl m-auto py-3 px-2 md:px-4 flex flex-col gap-2 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {Items.grid.map((item, index: number) => {
          const isActive = expanded ? true : activeIndices.includes(index);

          const Comp =
            componentMap[isActive ? item.data.expanded : item.data.normal];

          return (
            <motion.div
              layout={animations && item.clickable}
              transition={{ duration: 0.5 }}
              onClick={() => {
                if (!expanded && !isActive && item.clickable) {
                  expand(index);
                }
              }}
              key={index}
              className={
                item.clickable
                  ? isActive
                    ? item.styles.expanded
                    : item.styles.normal
                  : item.styles.normal
              }
            >
              {Comp ? <Comp index={index} /> : <div>Component not found</div>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
