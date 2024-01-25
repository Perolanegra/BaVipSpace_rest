const db = require("../models/index");

const getSchedulingsRepo = async () => {
  try {
    const scs = await db.Scheduling.findAll();
    return scs;
  } catch (error) {
    console.log(error);
  }
};

const getSchedulingRepo = async (schedulingId) => {
  try {
    const sc = await db.Scheduling.findAll({
      where: {
        id: schedulingId,
      },
    });
    return sc;
  } catch (error) {
    console.log(error);
  }
};

const storeSchedulingRepo = async (payload) => {
  try {
    const stored = await db.Scheduling.create(payload);
    return stored;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSchedulingsRepo, getSchedulingRepo, storeSchedulingRepo };
