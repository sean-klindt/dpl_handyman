class Api::CommentsController < ApplicationController
  before_action :set_service
  
  def index
    render json: @service.comments
  end
  
  def show
    @comments = @service.comments.find(params[:id])
    render json: @comments
  end

  def create
    @comments = @service.comments.new(comment_params)
    if @comments.save
      render json: @comments
    else
      render json: { errors: @comments.errors }, status: :unprocessable_entity
    end
  end

  def update
    @comments = @service.comments.find(params[:id])
    if @comments.update(comment_params)
      render json: @comments
    else
      render json: { errors: @comments.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service.comments.find(params[:id]).destroy
    render json: { message: 'Comment Deleted'}
  end

  private
    def comment_params
      params.require(:service).permit(:title, :description)
    end

    def set_service
      @service = Service.find(params[:service_id])
    end
end
