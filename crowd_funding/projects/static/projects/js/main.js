$(function() {


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});

$('#report-form').on('submit', function(event) {
    event.preventDefault();
    report_comment($(this).data('project'), $(this).data('comment'));
});

function report_comment(projectId, commentId) {
    $.ajax({
        url: projectId + "/comments/" + commentId + "/report",
        type: "post",
        data: { report: $('#report-message').val() },

        success : function(json) {
            $('#report-message').val('');
            const reportModal = document.querySelector('#report_comment_modal_' + json.comment_id);
            let modal = bootstrap.Modal.getInstance(reportModal);
            modal.hide();
            $('#' + json.comment_id).replaceWith("<p class=\"text-muted\">comment has been reported.</p>");
        },

        error : function(xhr, errMsg, err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>");
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
};

$('#report-project-form').on('submit', function(event) {
    event.preventDefault();
    report_project($(this).data('project'));
});

function report_project(projectId, commentId) {
    $.ajax({
        url: projectId + "/report",
        type: "post",
        data: { report: $('#report-project-message').val() },

        success : function(json) {
            $('#report-message').val('');
            const reportModal = document.querySelector('#report_project_modal_' + json.project_id);
            let modal = bootstrap.Modal.getInstance(reportModal);
            modal.hide();
            $('#reported_project_' + json.project_id).append("<p class=\"text-muted\">project has been reported.</p>");
        },

        error : function(xhr, errMsg, err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>");
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
};