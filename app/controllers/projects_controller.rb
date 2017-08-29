class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def index
    if tool = project_params[:tool]
      projects = Tool.find_by(name: tool).projects
    else
      projects = Project.all
    end
    if type = project_params[:type]
      projects = projects.where(type: Type.find_by(name: type))
    end
    if order = project_params[:order]
      if order == "awesomeness"
        projects = projects.order(rank: :asc)
      elsif order == "random"
        projects = projects.shuffle
      else
        projects = projects.order(date: order)
      end
    else
      projects = projects.order(date: :desc)
    end

    render :json => projects
  end

  def show
    project = Project.find(project_params[:id])
    project_json = project.as_json
    project_json[:type] = project.type.name.capitalize
    project_json[:tools] = project.tools.map(&:name).join(", ")
    render :json => project_json
  end

  private

  def project_params
    params.permit(:type, :tool, :order, :id)
  end

  def record_not_found
    render plain: "404 Not Found", status: 404
  end
end
