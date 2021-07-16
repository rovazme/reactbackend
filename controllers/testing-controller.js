"use strict";

var controller = {

  test: (req, res) => {

    return res.status(200).send({status:'200',message:'Todo chido'})
  },
}; //End Controller

module.exports = controller;
