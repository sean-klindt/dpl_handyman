class Api::CommentsController < ApplicationController
  def index
    render json: @services.comments
  end
  
  def show
    @comments = @services.comments.find(params[:id])
    render json: @comments
  end

  def create
    @comments = @services.comments.new(comment_params)
    if @comments.save
      render json: @comments
    else
      render json: { errors: @comments.errors }, status: :unprocessable_entity
    end
  end

  def update
    @comments = @services.comments.find(params[:id])
    if @comments.update(comment_params)
      render json: @comments
    else
      render json: { errors: @comments.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @services.comments.find(params[:id]).destroy
    render json: { message: 'Comment Deleted'}
  end

  private
    def comment_params
      params.require(:service).permit(:title, :description)
    end
end
