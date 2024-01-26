const { getSchedulingRepo, getSchedulingsRepo, storeSchedulingRepo } = require('../repositories/schedulingRepo');

class SchedulingController {
  constructor() {
    this.store = this.store.bind(this);
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async store(req, res) {
    // req.body = {
    //   type: req.body.title,
    //   appointment_time: req.body.content,
    //   description: req.body.author_id,
    //   instructor_id: req.body.category_id,
    // };

    try {
      // Processando a imagem
      const imagePath = req.file.path;
      const schedules = await storeSchedulingRepo();
      return res.send(schedules);
    } catch (e) {
      return res.status(500).send({
        friendly: "Não foi possível adicionar o agendamento.",
        err: { message: e.message, name: e.name },
      });
    }
  }

  async getAll(req, res) {
    try {
      const page = req.query.page ? parseInt(req.query.page) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit) : 2;
      // Considera o limite e a página passada.
      const skip = (page - 1) * limit;
      const dataArr = await Posts.find().skip(skip).limit(limit);

      return res.send(dataArr);
    } catch (e) {
      return res.status(500).send({
        friendly: "Não foi possível retornar os agendamentos.",
        err: { message: e.message, name: e.name },
      });
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  async getAllByUserId(req, res) {
    // param: req.query.user_id
    try {
      const schedules = "";
      return res.send(schedules);
    } catch (error) {
      return res.status(500).send({
        friendly: "Não foi possível retornar os agendamentos.",
        err: { message: e.message, name: e.name },
      });
    }
  }
}

module.exports = SchedulingController;
