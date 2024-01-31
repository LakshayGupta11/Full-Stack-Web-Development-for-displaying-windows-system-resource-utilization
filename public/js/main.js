$(document).ready(function() {
  $('#timestampForm').submit(function(event) {
      event.preventDefault();
      
      const startDate = new Date($('#startDate').val() + 'T' + $('#startTime').val());
      const endDate = new Date($('#endDate').val() + 'T' + $('#endTime').val());

      $.ajax({
          type: 'POST',
          url: '/fetchdata',
          data: {
            startDate: $('#startDate').val(),
            endDate: $('#endDate').val(),
            startTime: $('#startTime').val(),
            endTime: $('#endTime').val()
        },
          success: function(data) {
              const tableBody = $('#data-body');
              tableBody.empty();

              data.forEach(item => {
                  const rowHtml = `
                      <tr>
                          <td>
                              Date: ${new Date(item.timestamp).toLocaleDateString()}
                              <br>
                              Time: ${new Date(item.timestamp).toLocaleTimeString()}
                          </td>
                          <td>${item.cpu_usage}</td>
                          <td>${item.memory_percent}</td>
                          <td>${item.disk_usage_percent}</td>
                          <td>${item.network_bytes_sent}</td>
                          <td>${item.network_bytes_received}</td>
                      </tr>
                  `;
                  tableBody.append(rowHtml);
              });
          },
          error: function() {
              alert('Error fetching data');
          }
      });
  });



  // Add event listener to the start date input
  $('#startDate').change(function() {
    const startDateValue = new Date($(this).val());
    const maxEndDate = new Date(startDateValue);
    maxEndDate.setDate(maxEndDate.getDate() + 7); // Add 7 days to the start date
    $('#endDate').attr('max', maxEndDate.toISOString().slice(0, 10));

    // Ensure end date stays within the limit
    const endDateValue = new Date($('#endDate').val());
    if (endDateValue > maxEndDate) {
        $('#endDate').val(maxEndDate.toISOString().slice(0, 10));
    }
});
});
