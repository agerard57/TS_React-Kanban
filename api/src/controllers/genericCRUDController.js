exports.getAll = (model) => (req, res) => {
    model.findAll()
        .then((object) => {
        res.json(object);
        })
        .catch((error) => {
        res.status(500).json({
            message: error,
        });
        });
    };

exports.getOne = (model) => (req, res) => {
    const id = req.params.id;
 
    model.findByPk(id)
     .then((object) => {
      if (object) {
        res.json(object);
      } else {
        res.status(404).json({
          message: `The object you are trying to get does not exist! (id: ${id})`,
        });
      }
     })
     .catch((error) => {
       res.status(500).json({
         message: error,
       });
     });
 };

 exports.add = (model,objectName) => (req, res) => {
  const object = new model(req.body);

  object
    .save()
    .then((_message) => {
      res.status(200).json({message:`Your ${objectName} has been added!`});
    })
    .catch((_error) => {
      res.status(500).json(_error);
    });
};

exports.patch = (model,objectName) => (req, res) => {
  model.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((object) => {
    if (object == 1) {
      res.status(200).json({
        message: `Your ${objectName} has been updated!`,
      });
    } else {
      res.status(404).json({
        message: `The ${objectName} you are trying to update does not exist! (id: ${req.params.id})`,
      });
    }
  })
  .catch((error) => {
    res.status(500).json({
      message: error,
    });
  });
};

exports.delete = (model,objectName) => (req, res) => {
  model.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((object) => {
    res.status(200).json({message: `Your ${objectName} has been deleted!`});
  }
  )
  .catch((error) => {
    res.status(500).json({
      message: error,
    });
  });
};