class Api::WorkersController < ApplicationController
  def index
    render json: Worker.all
  end
  
  def show
    @worker = Worker.find(params[:id])
    render json: @worker
  end

  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      render json: @worker
    else
      render json: { errors: @worker.errors }, status: :unprocessable_entity
    end
  end

  def update
    @worker = Worker.find(params[:id])
    if @worker.update(worker_params)
      render json: @worker
    else
      render json: { errors: @worker.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    Worker.find(params[:id]).destroy
    render json: { message: 'Worker Deleted'}
  end

  private
    def worker_params
      params.require(:worker).permit(:name, :phone)
    end
end
