module.exports = {
    //prints the given data in a tabular format
      printCurrentData: function(data){
          var table = $('<table></table>');
          var headers = Object.keys(require('../data/student')[0]);
          var headRow = $('<tr></tr>');

          //creating header for table with the keys
          $.each(headers, function(i, val){
              headRow.append($('<th>'+ val +'</th>'));
          });
          table.append(headRow);

          if(data){
              $.each(data, function(i, obj){
                  var dataRows = $('<tr></tr>');
                  $.each(headers, function(j, key){
                      dataRows.append($('<td>'+ obj[key] +'</td>'));
                  });
                  table.append(dataRows);
              });
          }

          $('#console').append(table);
      }
};