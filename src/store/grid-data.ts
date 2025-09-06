import { colorScheme } from "@/lib/styles";

export default {
  grid: [
    {
      namee: "Profile",
      clickable: true,
      data: {
        normal: "ProfileCard",
        expanded: "ProfileCard",
      },
      styles: {
        normal: `h-full border rounded-lg col-span-2 lg:row-span-2 flex justify-center items-center ${colorScheme.dark.background} ${colorScheme.light.background}`,
        expanded: `w-full col-span-full bg-transparent row-strat-auto `,
      },
    },
    {
      name: "Message",
      clickable: true,
      data: {
        normal: "MessageCard",
        expanded: "MessageCard",
      },
      styles: {
        normal: ` rounded-lg col-span-2 flex justify-center items-center border   ${colorScheme.dark.background} ${colorScheme.light.background} ${colorScheme.shadow}`,
        expanded: "col-span-full my-0 border rounded-full  ",
      }
    },
    {
      clickable: true,
      name: "Education",
      data: {
        normal: "EducationCard",
        expanded: "EducationDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56  col-span-1 flex justify-center items-center rounded-xl ",
        expanded: "h-full col-span-full my-8 bg-transparent",
      },
    },
    {
      name: "Projects",
      clickable: true,
      data: {
        normal: "ProjectsCard",
        expanded: "ProjectDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56  col-span-1 flex justify-center items-center rounded-lg",
        expanded:
          "h-full col-span-full row-strat-auto my-8 lg:row-start-auto  rounded-lg",
      },
    },
    {
      name: "Testemonials",
      clickable: true,
      data: {
        normal: "TestemonialsCard",
        expanded: "TestimonialsDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56  col-span-1 flex justify-center items-center rounded-lg",
        expanded: "h-full col-span-full my-8 rounded-lg",
      },
    },
    {
      name: "Skill Set",
      clickable: true,
      data: {
        normal: "SkillSet",
        expanded: "SkillSetDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56  col-span-2 row-start-4 lg:row-start-auto flex justify-center items-center rounded-2xl",
        expanded: "h-full col-span-full row-start-5 rounded-lg my-8",
      },
    },
    {
      name: "Social",
      clickable: true,
      data: {
        normal: "SocialCard",
        expanded: "SocialDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56 rounded-2xl col-span-1 flex justify-center items-center rounded-lg",
        expanded:
          "h-full col-span-full row-strat-auto lg:row-strat-auto  rounded-lg my-8",
      },
    },
    {
      name: "Stats",
      clickable: true,
      data: {
        normal: "StatsCard",
        expanded: "StatsCard",
      },
      styles: {
        normal: `h-full md:h-56 rounded-2xl col-span-2 flex justify-center items-center rounded-lg ${colorScheme.dark.background} ${colorScheme.light.background}`,
        expanded:
          "h-full col-span-full row-start-auto bg-transparent  rounded-lg",
      },
    },
    {
      name: "Contact",
      clickable: true,
      data: {
        normal: "ContactsCard",
        expanded: "ContactDetails",
      },
      styles: {
        normal:
          "h-48 md:h-56 rounded-2xl  col-span-2 flex justify-center items-center rounded-lg",
        expanded: "h-full col-span-full row-start-auto rounded-lg  my-8",
      },
    },
  ],
};
