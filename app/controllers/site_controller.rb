class SiteController < ApplicationController
	layout "site"

  def index
   
  end

  def overview
  	 @user = User.all
  end

  def floorplan
  	
  end

  def testimonial
  	
  end

  def blog
  	# @blog = Blog.where(:status => true)
    @blog = Blog.paginate(:page => params[:page], :per_page => 3).where(:status => true)
  end

  def blogdetail
    @blog = Blog.friendly.find(params[:id])
  end

  def contact_us
    
  end

  def create_contacts
    @contact =Contact.create(create_params)
    if @contact.save!
        render :json => {:status => "success"}
    else
        render :json => {:status => "error"}
    end
  end

  def create_params
    params.require(:contact).permit(:name, :email, :phoneno, :comments)
  end

end
