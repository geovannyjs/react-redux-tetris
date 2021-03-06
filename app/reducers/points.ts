const points = (points, board, action) => {
  switch (action.type) {
    case 'RESTART_POINTS':
      return Object.assign({}, points, { current: 0 })
    case 'UPDATE_POINTS':
      var p = points.current
      var b = points.best
      board.fixed.forEach(function(v, i) {
        if(v[0].status == 3) p++
      })

      // update best
      if(p > b) b = p

      return Object.assign({}, { best: b, current: p })
    default:
      return points
  }
}

export default points
