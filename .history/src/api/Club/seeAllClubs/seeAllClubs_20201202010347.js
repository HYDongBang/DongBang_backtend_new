import {} from "../../../context";

export default {
  Query: {
    seeAllClubs: async (prisma) => {
      return prisma.club.findMany();
    },
  },
};
